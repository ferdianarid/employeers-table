import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import Users from "../apis/users.json"
import { Columns, GroupColumns } from './Columns'

const Tables = () => {
    const columns = useMemo(() => Columns, [])
    const usersData = useMemo(() => Users, [])

    const TableInstances = useTable({
        columns: columns,
        data: usersData
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } = TableInstances

    return (
        <React.Fragment>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    {
                        footerGroups.map(footers => (
                            <tr {...footers.getFooterGroupProps()}>
                                {
                                    footers.headers.map(column => (
                                        <td {...column.getFooterProps}>
                                            {
                                                column.render("Footer")
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tfoot>
            </table>
        </React.Fragment>
    )
}

export default Tables