import { useState } from "react";
import Card from "../../ui/Card";
import styles from "../Sign/Sign.module.css";
function Contact() {
  const [problem, setProblem] = useState("");
  const [problemDescription, setProblemDescription] = useState("");

  const problemHandler = (event) => {
    setProblem(event.target.value);
  };
  const problemDescriptionHandler = (event) => {
    setProblemDescription(event.target.value);
  };

  const submitHandler=(event)=>{
      event.preventDefault();
      console.log(problem);
      console.log(problemDescription);
  }

  return (
    <Card className={styles.sign}>
      <img src={require("../../images/logo.png")} alt="logo" />
      <h3>How Can We Help You Today?</h3>
      <form onSubmit={submitHandler}>
        <label>Problem</label>
        <input
          placeholder="problem : buy a product"
          type="text"
          value={problem}
          onChange={problemHandler}
        />

        <label>Description</label>
        <input
          placeholder="describe your issues : i don't know how to Buy from your site"
          type="text"
          value={problemDescription}
          onChange={problemDescriptionHandler}
        />
        <button type="submit">Share</button>
      </form>
    </Card>
  );
}
export default Contact;