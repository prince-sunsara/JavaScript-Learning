/*
    DEEPLY UNDERSTAND DOM TREE, 
*/

// // // USING INDEX2.HTML

// browser first add everything in document (js object)
// so document is root node

// after that it make html as child node 
// so document have child node html (root element)
// document > html 


// now it parse all file and create DOM tree
/*
    DOCUMENT // root element of dom
        > HTML // root element of html
            > HEAD 
                > TITLE
                    > text (text of title)
                > SCRIPT  
            
            > BODY
                > DIV 
                    > H1 
                    > P 
*/




/*
    ROOT NODE
*/
// const rootNode = document.getRootNode()
// // console.log(rootNode) // document object
// // // console.log(rootNode.childNodes) // html



/*
    CHILD ELEMENT NODES, TEXT NODES
*/
// const htmlElementNode = rootNode.childNodes[0];
// // console.log(htmlElementNode); // print all html code
// // // console.dir(htmlElementNode); // print all method as it is object

// const htmlChildNode = htmlElementNode.childNodes;
// // console.log(htmlChildNode);  // NodeList(3) [head, text, body]

// const head = htmlChildNode[0]
// // console.log(head);
// const title = head.querySelector("title");
// console.log(title);

// const text = htmlChildNode[1]
// // console.log(text);  // data --> textContent --> "\n    "

// const body = htmlChildNode[2]
// // console.log(body);



/*
    PARENT ELEMENT NODES
*/
// console.log(body.parentNode)



/*
    SIBLING ELEMENT NODES
*/
// console.log('next sibling of text',text.nextSibling)
// console.log('previous sibling of body',body.previousSibling)


// console.log(head.nextElementSibling) // ignore textNode and return <body>...</body>



/*
    CHILDREN 
        > it doesnot gives any text or spaces > it direct gives elements
*/
// const container = document.querySelector(".container");
// console.log(container.children)   // HTMLCollection(2) [h1, p]