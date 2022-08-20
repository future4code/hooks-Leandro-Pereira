export type Tasks = {
    userId:number,
    id:number,
    title:string,
    completed:boolean
}

export const toDo:Tasks[] = [{		
    userId:1,
    id:1,
    title:"lavar louça",
    completed:false
},
{		
    userId:1,
    id:2,
    title:"lavar roupa",
    completed:true
},
{		
    userId:1,
    id:3,
    title:"varrer a casa",
    completed:false
},
{		
    userId:1,
    id:4,
    title:"lavar banheiro",
    completed:true
},
{		
    userId:1,
    id:5,
    title:"passar roupas",
    completed:false
},
{		
    userId:1,
    id:6,
    title:"dobrar roupas",
    completed:true
},
]