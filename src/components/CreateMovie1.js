import React from 'react';


const CreateMovie = ({onChangeForm, createMovie }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create Movies</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Title Movie</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="title" id="title" aria-describedby="emailHelp" placeholder="title" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Genre</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="genre" id="genre" placeholder="genre" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Director</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="director" id="director" aria-describedby="emailHelp" placeholder="director" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Year</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="release_year" id="release_year" aria-describedby="emailHelp" placeholder="release_year" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createMovie()} className="btn btn-danger">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateMovie