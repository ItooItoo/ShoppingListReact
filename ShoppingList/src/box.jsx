import React from "react";


export default function Box() {

    //Store list items and input field for clearing field
    const [list, setList] = React.useState([]);
    const [value, setValue] = React.useState('');


    //Save length of the list for id
    const listLength = list.length;

    //On form submit create new item in list
    function onSubmit(event) {
        event.preventDefault(); //Prevent page loading again after submiting
        createItem(event);
        setValue(''); //Clear input field
    }

    //Create item in list function
    function createItem(event) {
        // Create new item in list with id and text from input
        const newItem = {
            id: listLength,
            text: event.target.item.value
        };

        const newItems = [...list, newItem];

        setList(newItems); //Add new item to the list
    }

    //Remove item from list
    function removeItem(index) {
        const newList = list.filter((item) => item.id !== index);
        setList(newList);
    }
    //Handle change for clearing input field after submit
    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div className="box">
            <form onSubmit={onSubmit}>
                <input type="text" value={value} onChange={handleChange} name='item' placeholder="Add item" maxLength={35} required />
                <input type="submit" value='Add' />
            </form>
            <ul className="list">
                {list.map((element) =>
                    <div key={element.id} className="list-element">
                        <div className="lii">
                            <li>{element.text}
                            </li>
                        </div>
                        <button onClick={function () {
                            removeItem(element.id);
                        }}>X</button>
                    </div>
                )}
            </ul>

        </div>
    )
}