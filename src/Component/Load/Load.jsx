import {  DivContainer, DivNinetales, DivVulpix, ImgNine, ImgVulpix, MainLoad } from "./Style"
import char from "../../Assets/char.png"
import vulpix from "../../Assets/vulpix.png"

export const LoadGlobal = () => {

    return(
        <>
        <DivContainer>
        <MainLoad>
            <DivVulpix ><ImgVulpix src={vulpix}/></DivVulpix>
            <DivNinetales><ImgNine src={char}/> </DivNinetales>
        </MainLoad>
        </DivContainer>

        </>
    )
}