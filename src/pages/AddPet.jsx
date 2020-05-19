import React, { useState } from "react"
import { navigate } from "@reach/router"
import Layout from "../components/Layout/Layout.jsx"
import "./addStyles.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const contentful = require("contentful-management")

const AddPet = () => {
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [genderData] = useState({ male: "male", female: "female" })
  const [gender, setGender] = useState("")
  const [type, setType] = useState("")
  const [img, setImg] = useState("")
  const [desc, setDesc] = useState("")
  const [age, setAge] = useState(0)
  const [errorText, setErrorText] = useState("")

  const [imgId, setImgId] = useState("")
  const client = contentful.createClient({
    accessToken: "CFPAT-J4NK7_v8oXbHZpQJHsVZMfdGA-t8Mz2Kdh1OAqF9E2U",
  })

  const uploadImage = e => {
    setImg(URL.createObjectURL(e.target.files[0]))
    console.log("img is uploaded")
    client.getSpace("lillgvozq1hp").then(function (space) {
      let fileData = {
        fields: {
          title: {
            "en-US": "testupload",
          },
          file: {
            "en-US": {
              contentType: "image/jpeg",
              fileName: "berlin_english.jpg",
              upload: "https://via.placeholder.com/150.jpg",
            },
          },
        },
      }

      space.createAsset(fileData).then(function (asset) {
        asset.processForAllLocales().then(function (processedAsset) {
          processedAsset.publish().then(function (publishedAsset) {
            setImgId(publishedAsset.sys.id)
          })
        })
      })
    })
  }

  const isValid = () => {
    if (
      name === "" ||
      gender === "" ||
      type === "" ||
      age === 0 ||
      city === "" ||
      desc === ""
    ) {
      setErrorText("All fields are required")
      return false
    } else {
      setErrorText("")
      return true
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const isFormValid = isValid()
    if (isFormValid == true) {
      client
        .getSpace("lillgvozq1hp")
        .then(space =>
          space
            .createEntry("animales", {
              fields: {
                name: {
                  "en-US": name,
                },
                slug: {
                  "en-US": name,
                },
                home: {
                  "en-US": true,
                },
                sex: {
                  "en-US": gender === "male" ? true : false,
                },
                type: {
                  "en-US": type,
                },
                age: {
                  "en-US": parseInt(age),
                },
                city: {
                  "en-US": city,
                },
                description: {
                  "en-US": desc,
                },
                images: {
                  "en-US": {
                    sys: {
                      type: "Link",
                      linkType: "Asset",
                      id: imgId,
                    },
                  },
                },
              },
            })
            .then(entry => entry.publish())
        )
        .then(() => {
          toast.success("Your Pet's informations are added !")
          setTimeout(() => {
            navigate("/animals/all")
          }, 3000)
        })
        .catch(console.error)
    } else return
  }

  return (
    <Layout>
      <ToastContainer />

      <div className="add-cont">
        <h1>Find your pet a new home</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <div className="group">
            <input
              type="radio"
              id="male"
              name="gender"
              value={genderData.male}
              checked={genderData.male === gender}
              onChange={e => setGender(e.target.value)}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value={genderData.female}
              checked={genderData.female === gender}
              onChange={e => setGender(e.target.value)}
            />
            <label htmlFor="female">Female</label>
          </div>

          <label htmlFor="type">Choose the type:</label>
          <select
            id="types"
            onChange={e => setType(e.target.value)}
            value={type}
          >
            <option hidden disabled value="">
              -- select a type --{" "}
            </option>
            <option value="Birds">Birds</option>
            <option value="Cats">Cats</option>
            <option value="Dogs">Dogs</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="age">Enter The Age:</label>
          <input
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
          />

          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={e => setCity(e.target.value)}
          />

          <label htmlFor="img">Select image:</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={e => uploadImage(e)}
          />

          <div className="group">
            <label htmlFor="description" rows="5" cols="50">
              Describe Your Pet:
            </label>
            <textarea
              value={desc}
              onChange={e => setDesc(e.target.value)}
            ></textarea>
          </div>

          <button type="submit">Add</button>
          {errorText && <p className="error">{errorText}</p>}
        </form>
      </div>
    </Layout>
  )
}
export default AddPet
