
setTimeout(function() {
	walk(document.body);
}, 5000)

function walk(node) 
{

	
	var child, next;


	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\belection\b/g, "erection");
	v = v.replace(/\bElection\b/g, "Erection");
	v = v.replace(/\belections\b/g, "erections");
	v = v.replace(/\bElections\b/g, "Erections");
	v = v.replace(/\belect\b/g, "erect");
	v = v.replace(/\bElect\b/g, "Erect");
	
	textNode.nodeValue = v;
}

