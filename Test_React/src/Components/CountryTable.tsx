const CountryTable = ({country}) => {

    const TableData = country.map((c) => (
        <tr>
            <td>
                <img src={c.flags.png ? c.flags.png : "Pas d'image"}></img>
            </td>
            <td>{c.name.common}</td>
            <td>{c.nativeName}</td>
            <td>{c.capital || "N/A"}</td>
            <td>{c.continents}</td>
            <td>{c.languages}</td>
            <td>{c.currencies}</td>
            <td>{"N/A"}</td>
            <td>{c.name.common}</td>
            <td>{c.demonym}</td>
        </tr>
    ))



    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Drapeau</th>
                        <th>Pays</th>
                        <th>Nom dans sa propre langue</th>
                        <th>Capitale</th>
                        <th>Région</th>
                        <th>Langue</th>
                        <th>Nom de la monnaie</th>
                        <th>Symbole de la monnaie</th>
                        <th>Nom de la popupalation</th>
                    </tr>
                </thead>
                <tbody>
                    {TableData}
                </tbody>
            </table>
        </div>
    )

}

export default CountryTable