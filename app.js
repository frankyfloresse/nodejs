const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = 5100;

const hubkaBobs = [
    {
        name: 'Hubka Bob1',
        age: 18,
        gender: 'other'
    },
    {
        name: 'Hubka Bob2',
        age: 18,
        gender: 'other'
    },
    {
        name: 'Hubka Bob3',
        age: 18,
        gender: 'other'
    },
    {
        name: 'Hubka Bob4',
        age: 18,
        gender: 'other'
    },
    {
        name: 'Hubka Bob5',
        age: 18,
        gender: 'other'
    }
]

app.get('/hubkabobs', (req, res) => {
    //request ot db to get info
    res.json(hubkaBobs);
})

app.post('/hubkabobs', (req, res) => {
    const hubkaBob = req.body;
    hubkaBobs.push(hubkaBob);

    res.status(201).json({ message: 'Hubka Bob created'});
})

app.put('/hubkabobs/:id', (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const updatedHubka = req.body;

    hubkaBobs[id] = updatedHubka;
    res.status(200).json({
        message: 'Hubka Bob updated successfully',
        data: hubkaBobs[id]
    })
})

app.delete('/hubkabobs/:id', (req, res) => {
    const { id } = req.params;
    hubkaBobs.splice(id, 1);

    res.status(200).json({
        message: 'Hubka Bob deleted',
        data: hubkaBobs[id]
    })
})

app.listen(PORT, () => {
    console.log(`Server has started on PORT ${PORT}`);
})