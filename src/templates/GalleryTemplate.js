import React from "react"
import Layout from "components/Layout/Layout"
import Gallery from "components/shared/Gallery"
import PageHeader from "components/shared/PageHeader"
import TextContainer from "components/shared/TextContainer"
import Text from "components/shared/Text"

const GalleryPage = (props) => {
    return(
        <Layout>
            <PageHeader page={props.pageContext.slug === "" ? "gallery" : props.pageContext.slug} title={props.pageContext.name === "" ? "Gallery" :  props.pageContext.name} />


            {props.pageContext.slug === "rachel-and-vito" && 
                <TextContainer>
                    <Text md>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit tincidunt est pharetra elementum. Aliquam erat volutpat. Etiam luctus tempor neque, sed dictum ante fringilla vitae. Vestibulum tincidunt turpis eget elit fringilla, ac viverra dui ornare. Nullam commodo, enim vitae dictum volutpat, felis sapien cursus erat, vitae vehicula nisi ipsum quis nisl. Curabitur sed rhoncus lectus. In et lacus scelerisque, aliquam felis vel, iaculis arcu. Fusce iaculis id nibh aliquam ultrices. Praesent pellentesque tempor nisi, sed efficitur erat euismod vitae. Aliquam in mollis eros. Curabitur laoreet malesuada massa.
                    </Text>
                    <Text md>
                        Vivamus sapien metus, mollis non tempor eu, tincidunt in quam. In convallis ullamcorper tortor et facilisis. Cras maximus tincidunt lacus, aliquet condimentum neque sollicitudin eget. Cras sed blandit dui. Mauris luctus lacinia efficitur. Aenean eget commodo dolor, auctor ullamcorper diam. Donec volutpat elit a congue congue. Integer ac eleifend nibh.
                    </Text> 
                </TextContainer>
            }

            {props.pageContext.slug === "samantha-and-owain" && 
                <TextContainer>
                    <Text md>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit tincidunt est pharetra elementum. Aliquam erat volutpat. Etiam luctus tempor neque, sed dictum ante fringilla vitae. Vestibulum tincidunt turpis eget elit fringilla, ac viverra dui ornare. Nullam commodo, enim vitae dictum volutpat, felis sapien cursus erat, vitae vehicula nisi ipsum quis nisl. Curabitur sed rhoncus lectus.
                    </Text>
                </TextContainer>
            }

            <Gallery slug={props.pageContext.slug} />
        </Layout>
    )
}

export default GalleryPage