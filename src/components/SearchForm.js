import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const FormStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const ButtonStyle = styled.button`
  background: papayawhip;
  &:hover {
    background: dodgerblue;
  }
`;

function SearchForm(props, { values }) {
  //  const [characterSearch, setCharacterSearch] = useState("");
  //  const [characterSearchResults, setCharacterSearchResults] = useState([]);

  // useEffect(() => {
  //   const results = props.characters.filter(character =>
  //     character.toLowerCase().includes(characterSearch.toLowerCase())
  //     );
  //     setCharacterSearchResults(results);
  // }, [searchTerm]);
  // const handleChange = event => {
  //   setCharacterSearch(event.target.value);
  // }

  // return (
  //   <div className="search-form">
  //     <form>
  //       <label htmlFor="name">Search:</label>
  //       <input id="name" type="textfield" placeholder = "Search" value={searchTerm} onChange={handleChange}/>
  //     </form>
  //     <div className = "character-list">
  //       <ul>
  //         {characterSearchResults.map(character = (
  //           <li key={props.character}>{props.character}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // )

  return (
    <FormStyle>
      <Form className="search-form">
        <Field type="text" name="character" placeholder="Search Characters" />
        <ButtonStyle type="submit">Search</ButtonStyle>
      </Form>
    </FormStyle>
  );
}

const FormikSearchForm = withFormik({
  mapPropsToValues({ character }) {
    return {
      character: character || ""
    };
  },
  validationSchema: Yup.object().shape({
    character: Yup.string().required("You must enter a name to continue.")
  }),
  handleSubmit(values, { props, setSubmitting, resetForm }) {
    props.setCharacterSearch(values.character);
    console.log(values.character);
    setSubmitting(false);
    resetForm();
  }
})(SearchForm);

export default FormikSearchForm;
