import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useFilters } from 'react-table'
import Users from "../apis/users.json"
import { Columns, GroupColumns } from './Columns'
import GlobalFilters from "./GlobalFilters"

const FilterTables = () => {
    const columns = useMemo(() => Columns, [])
    const usersData = useMemo(() => Users, [])

    const TableInstances = useTable({
        columns: columns,
        data: usersData
    }, useFilters, useGlobalFilter)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups, state, setGlobalFilter } = TableInstances

    const { globalFilters } = state

    return (
        <React.Fragment>
            <GlobalFilters filter={globalFilters} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                            <div>{column.canFilter ? column.render("Filter") : null}</div>
                                        </th>
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

export default FilterTables