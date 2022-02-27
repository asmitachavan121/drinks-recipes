export const searchText = (items, text) => {
    if(!items || !items.length) {
        return [];
    }
    if(!text) {
        return items;
    }
    const result = items.filter(item => {
        return item.id.toLowerCase().includes(text.toLowerCase()) ||
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.category.toLowerCase().includes(text.toLowerCase()) ||
        item.description.toLowerCase().includes(text.toLowerCase()) ? true: false;
    });
    return result;
}