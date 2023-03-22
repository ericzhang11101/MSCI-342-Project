export function convertCourseToNodes(courses) {
    let id = 0;
    let nodes = []
    let x = 1000;
    let y = 0;

    // TODO: generate location by term/ prereqs

    for (let course of courses){
        nodes.push({
            id: `node-${id}`,
            sourcePosition: 'right',
            targetPosition: 'left',
            type: 'selectorNode',
            data: {
                ...course
            },
            name: course.name,
            position: { 
                x: x+=500, 
                y: y+=500 
            },
        })

        id += 1;
    }

    return nodes
}

export function generateConnections(nodes){
    const map = {}
    let id = 0

    const prereqNodes = []

    // add to hm 
    for (let node of nodes){
        map[node.name] = node
        if (node.data.prereq.length){
            prereqNodes.push(node)
        }
    }

    const edges = []

    for (let node of prereqNodes){
        // find prereq
        let sourceNode
        console.log('prereq' )
        console.log(node.data.prereq)
        console.log(map)

        for (let possibleSourceNode of node.data.prereq){
            console.log(map[possibleSourceNode])
            if (map[possibleSourceNode] !== undefined){
                sourceNode = map[possibleSourceNode].id
                // console.log(sourceNode)
            }
        }

        edges.push({
            id: `edge-${id}`,
            target: node.id,
            source: sourceNode,
            sourceHandle: "b",
            targetHandle: undefined
        })    
        id ++
    }

    return edges
}

export function checkValidCourse(courseToCheck, courseList, term){
    console.log('courseList')
    console.log(courseList)
    // check antireqs 
    const courseMap = {}

    for (let course of courseList){
        courseMap[course.name] = course
    }

    for (let antireq of courseToCheck.antireq){
        if (courseMap[antireq]){
            return {
                valid: false,
                message: `${courseToCheck.name} cannot be taken with ${antireq}`
            }
        }
    }
    console.log('antireq pass')

    // check if prereq exists + is taken before 

    let prereqMet = false
    let prereqBefore = false
    let prereq 
    
    for (let course of courseToCheck.prereq){
        if (courseMap[course]){
            prereqMet = true
            prereq = courseMap[course]
            console.log('prereq')
            console.log(prereq)
            if (isBefore(term, prereq.data.term)){
                console.log('prereq before')
                prereqBefore = true
            }
        }
    }

    if (prereqMet && prereqBefore){
        // return true/ false + error 
        return {
            valid: true
        }
    } else if (prereqMet) {
        return {
            valid: false,
            message: `${courseToCheck.name} must be taken after ${prereq.name}`
        }
    } else {
        return {
            valid: false,
            message: `${courseToCheck.name} is missing prereq`
        }
    }

    
} 

function isBefore(term, prereq){
    console.log('isbefore')
    console.log(courseOrder[term])
    console.log(courseOrder[prereq])
    return courseOrder[term] > courseOrder[prereq]
}

const courseOrder = {
    '1A': 0,
    '1B': 1,
    '2A': 2,
    '2B': 3,
    '3A': 4,
    '3B': 5,
    '4A': 6,
    '4B': 7,
}