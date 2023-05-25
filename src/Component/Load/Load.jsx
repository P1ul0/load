import {  DivCharmander, DivContainer, DivVulpix, ImgCharmander, ImgVulpix, MainLoad } from "./Style"
import char from "../../Assets/char.png"
import vulpix from "../../Assets/vulpix.png"

export const LoadGlobal = () => {

    return(
        <>
        <DivContainer>
        <MainLoad>
            <DivVulpix ><ImgVulpix src={vulpix}/></DivVulpix>
            <DivCharmander><ImgCharmander src={char}/> </DivCharmander>
        </MainLoad>
        </DivContainer>

        </>
    )
}