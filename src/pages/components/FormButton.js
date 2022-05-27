/* jshint esversion:11 */

import { ThreeDots } from "react-loader-spinner";

export default function FormButton({ text, loading }){

    return (
        <button className={`d-flex ${loading ? 'disabled' : ''}`} disabled={loading}>
            { loading ? <ThreeDots height="40px" width="40px" color="white" /> : <span>{text}</span> }
        </button>
    );

}