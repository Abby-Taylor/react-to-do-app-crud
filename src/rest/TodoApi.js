
const ENDPOINT ='https://crudcrud.com/api/a8f41537ce2f492bb5af24ea45bf63e4/items';

// a class that houses our api fetch calls

class ItemsApi {
    create = async (item) => {
        try {
            const resp = await fetch(`${ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
            return resp;
        } catch (exception) {
            console.log(`Problem creating item: ${exception}`);
        }
    }
    get = async () => {
        try {
            const resp = await fetch(ENDPOINT);
            const data = await resp.json();
            return data;
        } catch (exception) {
            console.log('Looks like fetchItems had an issue.', exception);
        }
    }
    update = async (item) => {
        try {
            let itemWithoutId = {
                item: item.name
            }
            const resp = await fetch(`${ENDPOINT}/${item._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(itemWithoutId)
            });
            return await resp.json();
        } catch (exception) {
            console.log('Looks like updating items had an issue', exception)
        }
    }
    delete = async(id) => {
        try {
            const resp = await fetch(`${ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {

                    'Content-Type': 'application/json'
                }
            });
            return resp;
        } catch (exception) {
            console.log(`problem deleting items: ${exception}`);
        }
    }
}

export const itemsApi = new ItemsApi();
