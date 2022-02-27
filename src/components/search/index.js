import { searchText } from '../../utils/search';
export const Search = (props) => {
    const onSearch = (event) => {
        let updatedDrinks;
        if(!event.target.value) {
            props.resetDrinks();
        } else {
            if(props.searchString.length > event.target.value.length) {
                updatedDrinks = searchText(props.originalDrinks, event.target.value);
            } else {
                updatedDrinks = searchText(props.drinks, event.target.value);
            }
            props.setDrinks(updatedDrinks);
            props.setSearchString(event.target.value);
        }
    }

    return (
        <div className="search">
            <div className="input-group mb-3">
            <input 
                type="text" 
                className="form-control"
                placeholder="search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2" 
                onInput={onSearch}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
            </div>
        </div>
    )
}