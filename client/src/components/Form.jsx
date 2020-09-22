import React, { useEffect } from 'react';
import { Link } from "@reach/router"

const Form = (props) => {
    const { author, setAuthor, onSubmitHandler, errors } = props;

    console.log(errors.name && errors.name.message)
    const { name } = author
    return (
        <div>
            <form onSubmit={(e) => onSubmitHandler(e)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" value={name} id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setAuthor({ name: e.target.value })} />
                </div>
                <div className="invalid-feedback">
                    {errors.name && errors.name.message}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Form;