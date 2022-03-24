import { format } from "date-fns"
import ColumnFilters from "./ColumnFilters"

export const Columns = [{
        Header: "Id",
        Footer: "Id",
        accessor: "id",
        Filter: ColumnFilters,
        disableFilters: true
    },
    {
        Header: "First Name",
        Footer: "First Name",
        accessor: "firstname",
        Filter: ColumnFilters
    },
    {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "lastname",
        Filter: ColumnFilters
    },
    {
        Header: "Date Birth",
        Footer: "Date Birth",
        accessor: "date_birth",
        Filter: ColumnFilters,
        Cell: ({ value }) => { return format(new Date(value), "dd/MM/yyyy") }
    },
    {
        Header: "Address",
        Footer: "Address",
        accessor: "address",
        Filter: ColumnFilters
    },
    {
        Header: "Gender",
        Footer: "Gender",
        accessor: "gender",
        Filter: ColumnFilters
    },
    {
        Header: "Ages",
        Footer: "Ages",
        accessor: "age",
        Filter: ColumnFilters
    },
    {
        Header: "Email Address",
        Footer: "Email Address",
        accessor: "email",
        Filter: ColumnFilters
    },
    {
        Header: "Phone Number",
        Footer: "Phone Number",
        accessor: "phone_number",
        Filter: ColumnFilters
    }
]

export const GroupColumns = [{
        Header: "Id",
        Footer: "Id",
        accessor: "id"
    },
    {
        Header: "Name",
        Footer: "Name",
        columns: [{
                Header: "First Name",
                Footer: "First Name",
                accessor: "firstname"
            },
            {
                Header: "Last Name",
                Footer: "Last Name",
                accessor: "lastname"
            }
        ]
    },
    {
        Header: "Informations",
        Footer: "Informations",
        columns: [{
                Header: "Date Birth",
                Footer: "Date Birth",
                accessor: "date_birth"
            },
            {
                Header: "Address",
                Footer: "Address",
                accessor: "address"
            },
            {
                Header: "Gender",
                Footer: "Gender",
                accessor: "gender"
            },
            {
                Header: "Ages",
                Footer: "Ages",
                accessor: "age"
            },
            {
                Header: "Email Address",
                Footer: "Email Address",
                accessor: "email"
            },
            {
                Header: "Phone Number",
                Footer: "Phone Number",
                accessor: "phone_number"
            }
        ]
    }
]