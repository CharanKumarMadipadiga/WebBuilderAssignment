import CardItem from "../CardItem";
import LastCard from "../LastCard";
import RelatedDealsCard from "../RelatedDealsCard";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

import './index.css'

const buildCardsArray=[
    {
        id: 1,
        brand: "WixPro 72-Inch Responsive Website Builder",
        description: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        highlights: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        imageUrl: "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__",
        ratingValue: 9.8,
        ratingInWords: "Exceptional",
        ratingImage: "data:image/jpg;base64,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",
        builder: "Builder 1",
        isBestValue: true,
        bestChoiceImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEMSURBVHgBvZPhDYIwEIWvxgEcoU6gbqAT6AYyAk4gbqATqBvoBMAEsgFuoBvUd8mVVELg+kNf8kJoex93x5Xo13LOZU6vtB0/7mBauIQz6hfDZhogqzbGFNRfSdK1PpLN2teA1y3plQTl1w0QMvAJXsF30quUmMNXhlAFz6TMN+nlW2NhfjY9PMI50t5TpCSG2zRtb6RBP3IFKJezr67x8YdsALY9MCtneGYnpPz6owvKAJmKM2kVBLF5NOZB9n7dUowEmoUzKv3SlTkAv7E1Z80AyN/XpSwVcInZu0QDAVviweNzDZa51DW8ALSKBfLd5KBda4v/7gTABWkF2MYNa0ORGVrqETJ80j/0AWs3MUhcyHVPAAAAAElFTkSuQmCC"
    },

    {
        id: 2,
        brand: "SiteCraft 68-Inch Ultimate Web Design Studio",
        description: " Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
        highlights: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
        imageUrl: "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__",
        ratingValue: 9.5,
        ratingInWords: "Excellent",
        ratingImage: "data:image/jpg;base64,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",
        builder: "Builder",
        isBestValue: true,
        bestChoiceImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE/SURBVHgBxVTtccIwDJXv+r8ewSNkhHSDdILSCZoNyAbNBtAJyAYZgesEoROEDVQZPzc6FTg+cse7e4clPz9hS0A0M5wOmNnLR03XoXXO7XPwZDY/hEvhTviD3LOwwPpbuD+Sb8hCvl3ghFHYqvxaOAi3wo3Jj2A4ZrjGoTqKkFugSCxWYF1ib8B+H2nNSnXQo+oChxqla5URQ1vqQqSqrVTcQzSYwh7aWLAzt+tzUPF8KB2nUYnuQfiuuhgb8CXszHNXwjfhq8pF7U74QqrDg7l2y/axU74zuk+cDVYY8DZL0yhvNH8NiFo+NTbGpEY85jXiQ+exrqGt6ByUsLDX5tT9FU8z2dAlgFGexcO11XX/zeelpj1PM9co85jb0LXgaYgZ5ltl6OkWqHFiZRboHqAB+V+loDnA6edZ0SPwC/RTQSzQIbSUAAAAAElFTkSuQmCC"
    },
    {
        id: 3,
        brand: "WixPro 72-Inch Responsive Website Builder",
        description: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        highlights: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        imageUrl: "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__",
        ratingValue: 9.3,
        ratingInWords: "Exceptional",
        ratingImage: "data:image/jpg;base64,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",
        builder: "Builder 1",
        isBestValue: false,
    }

]

const lastCardObj= {
        id: 4,
        brand: "CDK Resposive Builder:",
        description: "An extensive library of widgets and apps, and detailed step-by-step guides",
        imageUrl: "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__",
        ratingValue: 9.1,
        ratingInWords: "Very Good",
        ratingImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAALCAYAAADLA1tMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALESURBVHgBpVbRcdNAEN09O4wZwKgEdYDpwPkhk+GDuII4FZhUELmCmAoiV0D8kTjwY6cCTAcqQSHDYCDc8u4k2Yp1sqJkZ+yxV/du377b3RORw+SyPZLPnkc1Taav+lTTZPqyK1OvSzVNvrRPqKYhji9Xr2euZ8q1mBQPqKU/Ur0gfWJ1WltAbpwQS62kLEfhoL7wOsCX5xK+IAQpfZgQhBh1LEnGqyOgTYioaz71qsImhJjqwQImsdgI2HMJz3aROcXWEie5000391P4iERPaNlccC+OC5sb3LO/PjUbhwiQCRCT1kfARfz+58JNqgVCOx1qKODoIHUvSP4dk5bYhVvFUqoDjmfrDCRAvGsXR7l40UnWM3Jjw/GY9+O5TNshMhcs+Q6eiNWM2PYayoyqbUG/eNcEkxlI/ZEZtupUokCU934MEwHQPkpOgatuH9Z93rsdW9xjOF54EFq+AWdiR9SgBb+LVwKnFQhh5YPJg1MnFJLDLQEibLgLNaPcRj4wM1pVj8OEx8D077mmXlA5E0AeuGAD9xiOmFsyyMQphPkKsbScmXaxM8KSBemHBkgx1m+fu5MpiJDiAjw7ojJziPAEjiH8n+i5FG4Ke5CpCAaXG5Z3oTuGzDcD5ALBLxM3jsISf0KQKXY8il0iVHLUMtnCMUwmYcG6wI0z3FoIVu5+Z66YA/zG6RZdirMzxj0nvK3XbxlHVcJhM655Z7lqD5JqwDxRtMLlr08/WU3XSL6XDhnz39+6O2NgmtM16xW/JUkrJBekYMu7LCGUtLlhbKtE1tPaOoD9+xwla5Vy0c3QFCMCbgpqBJYxoyUaups/5OYaYUrV9tk89ZzbAYU721x3vL+MCkHMyf7W5yRqmCvNg2Qiy5b3iSauTxrSkkbcu81aJJRLz2DKK8LNMbAcUUmugYgDMdV3gx9hDjeyOJGbbNl/n6t8yxuwZCkAAAAASUVORK5CYII=",
        builder: "CDK",
        discount:"26% Off",
        highlights: [
            {
                value: 9.1,
                caption: "Building Responsive",
            },
            {
                value: 8.9,
                caption: "Cool",
            },
            {
                value: 8.9,
                caption: "Docs",
        }],

        features: [
            {
                feature: "Documentation",
            },
            {
                feature: "Easy Use",
            },
            {
                feature: "Out of Box",
            }
        ]

}

const relatedDealsList=[
    {
        id: 1,
        imageUrl: "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__",
        discount: "20% Off",
        time: "Limited time",
        name: "Webbuilder 1",
        specification: "Computer  Modern clasic with wix support",
        mainPrice: "$39.96",
        oldPrice: "$49.96",

    },
    {
        id: 2,
        imageUrl: "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__",
        discount: "20% Off",
        time: "Limited time",
        name: "Webbuilder 1",
        specification: "Computer  Modern clasic with wix support",
        mainPrice: "$39.96",
        oldPrice: "$49.96",

    },
    {
        id: 3,
        imageUrl: "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__",
        discount: "20% Off",
        time: "Limited time",
        name: "Webbuilder 1",
        specification: "Computer  Modern clasic with wix support",
        mainPrice: "$39.96",
        oldPrice: "$49.96",

    }
]

const ContentSection =()=>{

    const renderDateUpdateContainer=()=>(
        <div className='date-update-container'>
            <ul className="date-list">
                <div className="container">
                    <IoIosCheckmarkCircleOutline className="icon"/>
                    <li className="list-item">Last Updated - February 22, 2020</li>
                </div>
                <div className="container">
                    <IoIosInformationCircleOutline className="icon" />
                    <li className="list-item">Advertising Disclosure</li>
                </div>
            </ul>
            <select className="dropdown-list">
                    <option>Top revelant</option>
            </select>
            
        </div>
    )

    return (
        <div className='content-container'>
            <div className='heading-container'>
                <h1 className='heading'>Best Website builders in the US</h1>
            </div>
            {renderDateUpdateContainer()}
            <ul className="tools-container">
                <li className="items border">Tools</li>
                <li className="items border">AWS Builder</li>
                <li className="items border">Start Build</li>
                <li className="items border">Build Supplies</li>
                <li className="items border">Tooling</li>
                <li className="items border">Blue Hosting</li>

            </ul>
            <ul className="hostings-list">
                <li>Home</li>
                <MdKeyboardArrowRight className="icon host-icon"/>
                <li>Hosting for all</li>
                <MdKeyboardArrowRight className="icon host-icon"/>
                <li>Hosting</li>
                <MdKeyboardArrowRight className="icon host-icon"/>
                <li>Hosting6</li>
                <MdKeyboardArrowRight className="icon host-icon"/>
                <li>Hosting5</li>
            </ul>
            <ul className="buildcards-list">
                {buildCardsArray.map(eachItem=>(
                    <CardItem cardDetails={eachItem}/>
                ))}
                <li className="builder-card">
                    <LastCard lastCardObj={lastCardObj}/>
                </li>
                
            </ul>
            <h1 className="related-deals-heading">Related deals you might like for</h1>
            <ul className="related-list-container">
                {relatedDealsList.map(eachCard=>(
                    <RelatedDealsCard cardDetails={eachCard} key={eachCard.id}/>
                ))}
            </ul>
            <div className="signup-container">
                    <h1 className="signup-heading">Sign up and get exclusive special deals</h1>
                    <button className="signup-btn" type="button">Sign up</button>
            </div>
        </div>
    )

    
}

export default ContentSection