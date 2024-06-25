import Proptypes from 'prop-types'
function Table({ Data, Columns, Title }) {
    
    return (
        <section className="table-responsive">
            <table cellSpacing="0">
                <thead>
                    <tr>
                        { Columns != 0 &&
                            <th colSpan={ Columns }>{ Title[0] }</th>
                        }
                        {
                            Columns == 0 &&
                                Title.map((title, index) => (
                                    <th key={ index }>{ title }</th>
                                ))
                        }
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
    Columns: Proptypes.number.isRequired,
    Title: Proptypes.array.isRequired
}
export default Table