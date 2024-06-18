import Proptypes from 'prop-types'
function Table({ Data, Columns, Title }) {
    return (
        <section className="table-responsive">
            <table cellSpacing="0">
                <thead>
                    <tr>
                        <th colSpan={Columns}>{Title}</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((item, index) => (
                        <tr key={index}>
                            {item.row.map((item, index) => (
                                <td key={index}>{item}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
        )
}

Table.propTypes = {
    Data: Proptypes.array.isRequired,
    Columns: Proptypes.number,
    Title: Proptypes.string
}
export default Table