import React, {useState} from 'react'

const Form = (props) => {

  const [formData, setFormData] = useState({
    searchzip: ''
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
    console.log(formData)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.weathersearch(formData.searchzip)
    // console.log('this is working')

  }

  return (
  <form onSubmit={handleSubmit}>
    <input type="text" name="searchzip" placeholder="Enter Zipcode" onChange={handleChange} value={formData.searchzip}/>
    <input type="submit" value="Find Weather" />
  </form>)
}

export default Form