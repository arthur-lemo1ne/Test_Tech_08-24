const CountryTable = (country: any[]) => {

    const TableData = country.map((c) => (
        <tr>
            <td>
                <img src={c.flags.png ? c.flags.png : "Pas d'image"}></img>
            </td>
            <td>{c.translations.fra.common}</td>
            <td>{c.name.common}</td>
            <td>{c.capital}</td>
            <td>{c.continents}</td>
            <td>{c.capital}</td>
            <td>{c.capital}</td>
            <td>{c.capital}</td>
            <td>{c.capital}</td>
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
                        <th>Nom de la population</th>
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