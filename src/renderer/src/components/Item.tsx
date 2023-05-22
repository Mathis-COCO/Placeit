import { useLocalStorage } from "@renderer/hook/UseLocalStorage";
import { useEffect, useState } from "react";
import { FormComponent } from "./Form";
import { ListComponent } from "./List";
import { ListItemText, Typography } from "@mui/material";

export interface Item {
    name: string;
}

export function ItemComponent(){
    const [name, setName] = useState<string>('')
    const [listItem, setListItem] = useLocalStorage<Array<Item>>('Item', [])
    
    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        let item: Item = {
            name: name
        }
        let items: Item[] = []
        if (item) {
            items = [...listItem, item]
            setListItem(items)
            console.log(listItem)
        }


    }
    console.log(listItem)
    const listItems = listItem.map((element) =>
        <ListComponent item={element} />
    );
    return (
        <>
            <FormComponent handleNameChange={handleNameChange} handleSubmit={handleSubmit} />
            <ul>{listItems}</ul>
        </>
    )
}