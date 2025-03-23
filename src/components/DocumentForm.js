import React from "react";

const DocumentForm = () => {
    return (
        <div>
            <h2>Create or Edit a Document</h2>
            <form>
                <input type="text" placeholder="Document Title" />
                <textarea placeholder="Document Content"></textarea>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default DocumentForm;
