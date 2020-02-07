export const searchInput = (events, value, field) => {

    if (events.length === 0 || !value) {
        return events;
    }

    return events.filter((e) => {
        const t = Object.assign({}, e);

        if (!isNaN(t[field])) {
            t[field] += '';
        }

        if (field === 'amount') {
            t[field] = t['amount'];
        }

        if (field === 'date') {
            t[field] = t['date'].split(' ')[0].split('.').join('')
        }

        if (field === 'category') {
            t[field] = t['description'];
        }

        if (field === 'type') {
            t[field] = t[field] === 'income' ? 'venit' : 'cheltuieli';
        }


        return t[field].toLowerCase().includes(value.toLowerCase());
    })
};