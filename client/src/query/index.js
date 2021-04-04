const qBank = [
    {
        id: 0,
        question: `What do you see in the below picture?`,
        options: [`Lion`, `Tiger`, `Leopard`, `Fox`],
        Images: [`https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`],
        correctAnswer: `Tiger`
    },
    {
        id: 0,
        question: `Choose the name of animal`,
        options: [`Lion`, `Tiger`, `Leopard`, `Fox`],
        Images: [`data:image/jpeg;base64,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`],
        correctAnswer: `Lion`
    },
    {
        id: 0,
        question: `Choose the name of animal`,
        options:  [`Lion`, `Tiger`, `Leopard`, `Fox`],
        Images: [`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-TxQ9_oM6iUtrUn8LP3Iz3ZqkWPVTBRwSA&usqp=CAU`],
        correctAnswer: `Fox`
    },
    {
        id: 0,
        question: `Find the name of animal`,
        options:  [`Lion`, `Tiger`, `Leopard`, `Fox`],
         Images: [`https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`],
         correctAnswer: `Leopard`
    },
    {
        id: 0,
        question: `Find the name of animal`,
        options: [`Lion`, `Tiger`, `Elephant`, `Fox`],
        Images: [`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZBI3I6LwLuvC3fraSJQZ_6dflpctMEDllA&usqp=CAU`],
        correctAnswer: `Elephant`
    },
    {
        id: 0,
        question: `Guess the name of animal`,
        options: [`Dog`, `cow`, `Elephant`, `Fox`],
        Images: [`http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg`],
        correctAnswer: `Dog`
    },
    {
        id: 0,
        question: `Guess the name of animal`,
        options: [`Dog`, `cow`, `Dinosaur`, `Got`],
        Images: [`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmD_Qp1gQFStWlBR_Lkodnuig-Jll82gDkhw&usqp=CAU`],
        correctAnswer: `Dinosaur`
    },
    {
        id: 0,
        question: `Guess the name of animal`,
        options: [`Dog`, `Camel`, `Dinosaur`, `Goat`],
        Images: [`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhS8PJJ7UCwte1iMWRpW84xdAhU-byfB-dgg&usqp=CAU`],
        correctAnswer: `Camel`
    },
    {
        id: 0,
        question: `Guess the name of animal`,
        options: [`Deer`, `Camel`, `Dinosaur`, `Goat`],
        Images: [`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiOERmn80jOLD2wm0SNNR7uxfjRoz-NWF7Q&usqp=CAU`],
        correctAnswer: `Deer`
    },
    {
        id: 0,
        question: `Guess the name of animal`,
        options: [`Deer`, `Camel`, `Goat`, `Cow`],
        Images: [`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXZm3t603UNs8Rim2MH_aQji4JgK1Zz14vQ&usqp=CAU`],
        correctAnswer: `Goat`
    },
]

export default qBank;

