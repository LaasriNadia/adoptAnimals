import React, { useState, useEffect, useRef } from "react"
import { navigate } from "@reach/router"

import Layout from "../components/Layout/layout"
import "./addpets.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const contentful = require("contentful-management")

const AddPet = () => {
  const firstRender = useRef(true)
  const [disable, setDisabled] = useState(true)
  const [nameError, setNameError] = useState(null)
  const [cityError, setCityError] = useState(null)
  const [homeError, setHomeError] = useState(null)
  const [genderError, setGenderError] = useState(null)
  const [typeError, setTypeError] = useState(null)
  const [descError, setDescError] = useState(null)
  const [ageError, setAgeError] = useState(null)

  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [homeData] = useState({ yes: "yes", no: "no" })
  const [home, setHome] = useState("")
  const [genderData] = useState({ male: "male", female: "female" })
  const [gender, setGender] = useState("")
  const [type, setType] = useState("")
  const [img, setImg] = useState("")
  const [desc, setDesc] = useState("")
  const [age, setAge] = useState(0)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    setDisabled(formValidation())
  }, [name, home, gender, type, age, city, desc])

  const formValidation = () => {
    if (name === "") {
      setNameError("Name cant be blank!")
      return true
    } else if (home === "") {
      setHomeError("Please, Choose a home!")
      return true
    } else if (gender === "") {
      setGenderError("Please, Choose a gender!")
      return true
    } else if (type === "") {
      setTypeError("Please, Choose a type!")
      return true
    } else if (age === 0) {
      setAgeError("The age can't be equal to 0 ")
      return true
    } else if (city === "") {
      setCityError("Please,choose a city!")
      return true
    } else if (desc === "") {
      setDescError("Please, Describe your pet!")
      return true
    } else {
      setNameError(null)
      setHomeError(null)
      setGenderError(null)
      setTypeError(null)
      setAgeError(null)
      setCityError(null)
      setDescError(null)
      return false
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const client = contentful.createClient({
      accessToken: "CFPAT-J4NK7_v8oXbHZpQJHsVZMfdGA-t8Mz2Kdh1OAqF9E2U",
    })
    client
      .getSpace(process.env.CONTENTFUL_SPACE_ID)
      .then(space =>
        space.createEntry("animales", {
          fields: {
            name: {
              "en-US": name,
            },
            slug: {
              "en-US": name,
            },
            home: {
              "en-US": home === "yes" ? true : false,
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
          },
        })
      )
      .then(() => {
        toast.success("Your Pet's informations are added !")
        setTimeout(() => {
          navigate("animals/all")
        }, 5000)
      })
      .catch(console.error)
  }

  return (
    <Layout>
      <ToastContainer />

      <div className="add-cont">
        <img src={img} alt="" />
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
          {nameError && <p className="error">{nameError}</p>}

          <div className="group">
            <span>Home:</span>
            <input
              type="radio"
              id="yes"
              name="home"
              value={homeData.yes}
              checked={homeData.yes === home}
              onChange={e => setHome(e.target.value)}
            />
            <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              id="no"
              name="home"
              value={homeData.no}
              checked={homeData.no === home}
              onChange={e => setHome(e.target.value)}
            />
            <label htmlFor="no">No</label>
          </div>
          {homeError && <p className="error">{homeError}</p>}

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
          {genderError && <p className="error">{genderError}</p>}

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
          {typeError && <p className="error">{typeError}</p>}

          <label htmlFor="age">Enter The Age:</label>
          <input
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
          {ageError && <p className="error">{ageError}</p>}

          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          {cityError && <p className="error">{cityError}</p>}

          <label htmlFor="img">Select image:</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={e => setImg(URL.createObjectURL(e.target.files[0]))}
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
          {descError && <p className="error">{descError}</p>}

          <button type="submit" disabled={disable}>
            Add
          </button>
        </form>
      </div>
    </Layout>
  )
}
export default AddPet
