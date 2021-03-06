import React, { useState, useContext } from "react"
import { IdentityContext } from "../components/Context.jsx"
import { navigate } from "@reach/router"
import "./addStyles.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const contentful = require("contentful-management")

const AddPet = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)

  //
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  //
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [genderData] = useState({ male: "male", female: "female" })
  const [gender, setGender] = useState("")
  const [type, setType] = useState("")
  const [desc, setDesc] = useState("")
  const [age, setAge] = useState(0)
  const [errorText, setErrorText] = useState("")
  const [imgId, setImgId] = useState("")
  const client = contentful.createClient({
    accessToken: process.env.GATSBY_CONTENTFUL_MANAGEMENT_KEY,
  })

  const uploadImage = e => {
    e.persist()

    client
      .getSpace(process.env.GATSBY_CONTENTFUL_SPACE_ID)
      .then(space =>
        space.createAssetFromFiles({
          fields: {
            title: {
              "en-US": name,
            },
            description: {
              "en-US": desc,
            },
            file: {
              "en-US": {
                contentType: e.target.files[0].type,
                fileName: e.target.files[0].name,
                file: e.target.files[0],
              },
            },
          },
        })
      )
      .then(asset => asset.processForAllLocales())
      .then(asset => {
        asset.publish()
        setImgId(asset.sys.id)
      })
      .catch(console.error)
  }

  const isValid = () => {
    if (
      name === "" ||
      gender === "" ||
      type === "" ||
      age === 0 ||
      city === "" ||
      desc === "" ||
      phone === "" ||
      email === ""
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
    if (isFormValid === true) {
      client
        .getSpace(process.env.GATSBY_CONTENTFUL_SPACE_ID)
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
                phone: {
                  "en-US": phone,
                },
                email: {
                  "en-US": email,
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
    <>
      <div className="header__section">
        <div className="header__hero"></div>
        <ToastContainer />
        <div className="add-cont">
          {user ? (
            <>
              <h1 id="addPetTitle">Find your pet a new home: </h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your pet's name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <div className="group">
                  <label htmlFor="sex"> Your pet's gender: </label>
                  <div>
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
                </div>

                <label htmlFor="type">Choose the type:</label>
                <select
                  id="types"
                  onBlur={e => setType(e.target.value)}
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

                <label htmlFor="age">Enter it's Age (months) :</label>
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

                <label htmlFor="img">Enter your pet's picture:</label>
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
                    columns="3"
                    rows="3"
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                  ></textarea>
                </div>

                <label htmlFor="phone">Your Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />

                <label htmlFor="email">Your Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />

                <button type="submit">Add Pet</button>
                {errorText && <p className="error">{errorText}</p>}
              </form>
            </>
          ) : (
            <>
              <p>You must login to access this page! </p>
              <button
                onClick={() => {
                  netlifyIdentity.open()
                }}
              >
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
export default AddPet
