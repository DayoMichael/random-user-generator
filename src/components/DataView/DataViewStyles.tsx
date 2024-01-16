import { styled } from "styled-components";

export const DataViewStyle = styled.div`
    padding: 5rem;
    .ag-cell-value {
        text-align: start;
    }
    @media only screen and (max-width: 767px) {
        padding: 1rem;
        .ag-paging-panel {
            font-size: 8px;
            white-space: nowrap;
            margin: 1px
        }

        .ag-paging-panel > * {
            margin: 2px
        }
        .ag-label {
            display: none;
        }
    }

`