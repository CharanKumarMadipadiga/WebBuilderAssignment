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
        ratingImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAALCAYAAADLA1tMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJHSURBVHgBvZbfUdtAEMa/PZuMHxJGJaiDOB2IJ4bJC67ApoIkFSBXgDvAriD4BU2egA5cgkvQhMlESeA2e6c/COskcTCwM/ZY5/tuf7e3uyfAYXy5v+DvQQBP4+TDDJ7GyfuIkyCCp/GP/VM8w9oYVXNiEELRF4z0V3g5CGYgdeYdQBqcgthrU5aRKfYNfBdjIxBQepoDSjB8LN9M4BNAuyEgMh+/rNBx7lP5ZUUHI1kgE6FRJlHai4rFwwJ1AdZrZMMNTdJ0V2x17/6FGA6mckLl4im0PhHdlj7/2rh4OBnJie6NMVCiw3ExvAHff4Pm1KWrfCk1Fsbz2uZi8XfzUkaytSZphn7b4DcdGGd8JYv/5SvZxLhXJaB0+HOeB0BSU/GZ6PrLh/SMDm9XVvcWjAXgUh6mHVO3AnJAR+m2HLBpTeKoyh6HMa1EM3s0lARxb09gmosu3tG9KiM9wVHDwZMcOYJQ00nT4nO4wRpBeAvGWrO8W8JNdu1yYCwf57Vbh2XLuNHJhpA6/krbgtDJqHn9LEaNRfnzIRCk3LVE1FNj9NE5zLpVZ+vX3SeCzuu3jVG1MKCHUd1X69Wvz9B+M25k8xOTosVziE4f0ozM6Zr5ij6Bi+grtMNldyWApLTp3nRifxsbdTa38DEjr4rxsR+j6O06D4c8rCazSVVbZ9fFyIWtSbmzzXVHR9l2d317sn/0BVjNa6l5nL8TcMf7xFCuT8yRYUGT27JElnwZGE17RrgZY8someS8Pu3LV4Mxsn0KXAXiP3hQXaNnb4UWAAAAAElFTkSuQmCC",
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
        ratingImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAALCAYAAADLA1tMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK8SURBVHgBnVbtcdNAEN09O4xngKAS3AGiA/lXJpMfiSqIUwFQQeQK4lRguQLiH4nhl5MKMB2IDgQZBgPhlncnyRbxSYq8M/7Qed+9d+/29kzkCLnZH8sHz6OWIfOXQ2oZMn8RyNwLqGXIp/1zahng6cvHVwvXb8qVTIrfUk+/o3YkQ2J10dpA7pwTS6tFWY3CUXvjdYQ332X8lhGk9GkmEGa0iWwxXhsD7YKIAvNqVxV2QeBUTzbQcjGfksily3i2SWYXeyvs5F6QT97P4WMSPaNVd8lhmm5NbnDP/vSp2wEBFwakpPUZcAkf/Vi6RfWwo3s+dRRwdJIPL0n+victqQu35lLKh8bJZgUSge/OpVGun/tZPmNtbDbYh64zfMc6wUz0Bc/g6iZszxrKjJpjST95YMhkAVG/ZYGp/EYUhPLB91FmAI6Pkgvgmo8P6yEf3E8tbheN1x6Mls+OeUPMe5VXIIyVY7MOZUUKTxsIEuSEheM8wKfm0I7XBeYtTLC4wzQG7pKaQnhUmGBxu2g8SlFhfLaVpTtpruWWOqYKyfSbgcoHhzVEhmCAnKQ8aJ8xTlVmGBPMvI8CY5FT4AY3sjnbuF00xlVctmdomVjzgCs1y4fYzSG3jwlKRBiXmRtHccV4JpApdfyUukxo1KhlVqPRcLl6VQDctMBtjGDlPu/MDX2AXzuHRVfibI9x9wmv9vqt0qgqNKwJS71M6eOsGmCOojWufH32c9AdFh+aEs2f+7UkDBKzuyZf8RtcT7N85mpxq4dCWGK7eFa+iR3p1Tbg/v8apTgq1aabprl+AE7oKxr4hDo6KG9yt5SUmjZom0gWprPG5s421x0frpItErOzv/QViRqVSvMk68hS83+iiwZFI1rRmMP74ojEcuMZTHVFuDVGViMqyXXFY0M8awBxVMKNLU7kW5H2DwzHc4uYgJ4BAAAAAElFTkSuQmCC",
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
        ratingImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAALCAYAAADLA1tMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJHSURBVHgBvZbfUdtAEMa/PZuMHxJGJaiDOB2IJ4bJC67ApoIkFSBXgDvAriD4BU2egA5cgkvQhMlESeA2e6c/COskcTCwM/ZY5/tuf7e3uyfAYXy5v+DvQQBP4+TDDJ7GyfuIkyCCp/GP/VM8w9oYVXNiEELRF4z0V3g5CGYgdeYdQBqcgthrU5aRKfYNfBdjIxBQepoDSjB8LN9M4BNAuyEgMh+/rNBx7lP5ZUUHI1kgE6FRJlHai4rFwwJ1AdZrZMMNTdJ0V2x17/6FGA6mckLl4im0PhHdlj7/2rh4OBnJie6NMVCiw3ExvAHff4Pm1KWrfCk1Fsbz2uZi8XfzUkaytSZphn7b4DcdGGd8JYv/5SvZxLhXJaB0+HOeB0BSU/GZ6PrLh/SMDm9XVvcWjAXgUh6mHVO3AnJAR+m2HLBpTeKoyh6HMa1EM3s0lARxb09gmosu3tG9KiM9wVHDwZMcOYJQ00nT4nO4wRpBeAvGWrO8W8JNdu1yYCwf57Vbh2XLuNHJhpA6/krbgtDJqHn9LEaNRfnzIRCk3LVE1FNj9NE5zLpVZ+vX3SeCzuu3jVG1MKCHUd1X69Wvz9B+M25k8xOTosVziE4f0ozM6Zr5ij6Bi+grtMNldyWApLTp3nRifxsbdTa38DEjr4rxsR+j6O06D4c8rCazSVVbZ9fFyIWtSbmzzXVHR9l2d317sn/0BVjNa6l5nL8TcMf7xFCuT8yRYUGT27JElnwZGE17RrgZY8someS8Pu3LV4Mxsn0KXAXiP3hQXaNnb4UWAAAAAElFTkSuQmCC",
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