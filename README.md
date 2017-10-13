JSON API Endpoint           Response JSON
=============               =============
GET /api/profile            {
                              name: "Tucker Bolding",
                              githubLink: "http://github.com/tuckbolding",
                              githubProfileImage: "https://avatars1.githubusercontent.com/u/30449561?v=4&s=460"
                              currentCity: "San Francisco",
                              personalSiteLink: "https://tuckbolding.github.io/"
                              pets: [
                                { name: 'Mowgli', typeOfAnimal: 'Dog' },
                                { name: 'Posey', typeOfAnimal: 'Dog' },
                                { name: 'Bear', typeOfAnimal: 'Horse' },
                                { name: 'Tucker', typeOfAnimal: 'Horse' }
                              ]
                            }
GET /api/dogs
                            {
                              dogImage: "String"
                              breed: "String",
                              cool: Boolean,
                              fluffy: Boolean,

                            }


GET /api/cooldogs           //Displays an array of only dogs whose 'cool' property equals true
