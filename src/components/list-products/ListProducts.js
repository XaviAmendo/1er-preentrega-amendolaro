

const products= [{
id:'101',
producto:'RTX 3080 TI',
marca:'MSI',
precio:'$950000',
categoria:'Placa de video',
img:'',
stock:'4',
descripcion:'Sobre la RTX 3080 TI MSI '

},
{
    id:'102',
    producto:'RTX 3060 TI',
    marca:'Zotac',
    precio:'$550000',
    categoria:'Placa de video',
    img:'',
    stock:'5',
    descripcion:'Sobre la RTX 3060 TI Zotac'
    
    },
    {
        id:'103',
        producto:'RTX 3060',
        marca:'Evga',
        precio:'$500000',
        categoria:'Placa de video',
        img:'',
        stock:'2',
        descripcion:'Sobre la RTX 3060 Evga'
        
        },
        {
            id:'201',
            producto:'Ryzen 9 7900x',
            marca:'AMD',
            precio:'$400000',
            categoria:'Micropocesador',
            img:'',
            stock:'2',
            descripcion:'Sobre el Ryzen 9 7900x'
            
            },
            {
                id:'202',
                producto:'Intel Core i9 12900',
                marca:'Intel',
                precio:'$606000',
                categoria:'Microprocesador',
                img:'',
                stock:'1',
                descripcion:'Sobre el i9 12900'
                
                },
                {
                    id:'301',
                    producto:'Mother B550 TUF WIFI',
                    marca:'Asus',
                    precio:'$200000',
                    categoria:'Mother Board',
                    img:'',
                    stock:'2',
                    descripcion:'Sobre el mother B550 TUF WIFI'
                    
                    },
                    {
                        id:'302',
                        producto:'Mother B760- Gaming WIFI',
                        marca:'Asus',
                        precio:'$210000',
                        categoria:'Mother Board',
                        img:'',
                        stock:'',
                        descripcion:'3'
                        
                        },
                        {
                            id:'303',
                            producto:'Mother B660-M TUF Gaming',
                            marca:'Asus',
                            precio:'$160000',
                            categoria:'Mother Board',
                            img:'',
                            stock:'6',
                            descripcion:'Sobre el mother B660-M Gaming Asus'
                            
                            },
                            
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(()=>{resolve(products)},500

        )
    }
    )
}

export const getProductById= (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve (products.find(prod => prod.id === productId))
        }, 500
        )
    }
    )
}