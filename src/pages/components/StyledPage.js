/* jshint esversion:11 */

import styled from 'styled-components';

const StyledPage = styled.div`

    background-color: #f2f2f2;
    padding: 100px 18px;
    padding-bottom: 120px;
    min-height: 100%;
    width: 100%;
    position: absolute;
    box-sizing: border-box;

    .page .page-title h3 {
        color: #126ba5;
        font-size: 22px;
    }

    .page .page-title p {
        color: #666;
        margin-top: 8px;
    }

    .page .page-title p.color-success {
        color: #8FC549;
    }
`;

export default StyledPage;