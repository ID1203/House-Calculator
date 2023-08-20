import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

function Income() {
    return (
        <IncomesStyled>
            <InnerLayout>
                <h1>Incomes</h1>
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`

`;

export default Income 