import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import "./addpets.css"
const contentful = require("contentful-management")

const AddPet = () => {
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  // const [slug, setSlug] = useState("")
  const [homeData] = useState({ yes: "yes", no: "no" })
  const [home, setHome] = useState("")
  const [genderData] = useState({ male: "male", female: "female" })
  const [gender, setGender] = useState("")
  const [type, setType] = useState("")
  const [img, setImg] = useState("")
  const [desc, setDesc] = useState("")
  const [age, setAge] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(name, home, gender, type, age, city, img, desc)
    // console.log(typeof age)
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
      .then(entry => console.log(entry))
      .catch(console.error)
  }

  return (
    <Layout>
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
            <option hidden disabled selected value="">
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

          {/* <label htmlFor="slug">Slug:</label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={slug}
            onChange={e => setSlug(e.target.value)}
          /> */}

          <label htmlFor="img">Select image:</label>
          <input type="file" id="img" name="img" accept="image/*" />
          <div className="group">
            <label htmlFor="description" rows="5" cols="50">
              Describe Your Pet:
            </label>
            <textarea
              value={desc}
              onChange={e => setDesc(e.target.value)}
            ></textarea>
          </div>
          <input type="submit" />
        </form>
      </div>
    </Layout>
  )
}
export default AddPet
