import React from "react";

const SearchForm = (props) => {

    return (
        <div>
            <form>
                <label>
                    Search for your character here:
                    <input 
                        type="text"
                        placeholder="Walter White 🔍"
                        name="character"
                        value={props}
                    />
                </label>
            </form>
        </div>
    )
}

export default SearchForm;