import React, {useState} from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
    const [formState, setFormState] = useState({name: "", email: "", info: ""});

    const [ errMessage, setErrMessage] = useState("");

    const { name, email, info} = formState;

    function eventHandler (e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);

            if (!isValid){
                setErrMessage("please enter a valid email");
            } else {
                setErrMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrMessage(`${e.target.name} is required`);
            } else {
                setErrMessage("");
            }
        }

        if (!errMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    function submission(e){
        e.preventDefault();
    }
    
    return (
    
        < section className="container">
        <h1 data-testid="h1tag" className="title">Contact form</h1>

        <hr></hr>
       
        <form class="justify-content-center" id="contact-form">
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="name" defaultValue={name} onBlur={eventHandler}/>
        </div>
    
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={email} onBlur={eventHandler}/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
    
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" defaultValue={info} onBlur={eventHandler} rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary" onSubmit={submission}>Submit</button>
      </div>
      </form>
      </section>
    );
}


export default ContactForm; 