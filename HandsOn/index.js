// // shape our tenser with 4 rows of 2 columns
// const shape = [4,2];
// // feed data into the tensor
// const data = tf.tensor([4,6,5,9,13,25,1, 57], shape);

// // set variables with zeros method
// const data2 = tf.variable(tf.zeros([8]));

// // print the data
// data2.print();

// // this is where we assign new values with 1 dimension
// data2.assign(tf.tensor1d([4, 12, 5, 6, 56, 3, 45, 3]));
// data2.print();

// // create 2 new 1 dimensional tensors
// const data3 = tf.tensor1d([4, 6, 5, 9]);
// const data4 = tf.tensor1d([5, 4, 23, 45]);

// // prints
// data3.print();
// data4.print();

// // adds and multiplies and prints
// data3.add(data4).print();
// data3.mul(data4).print();

// // define my model
// function simpleAdd(input1, input2) {
//     // tidy is used to free up GPU memory once
//     // the functions returns
//     return tf.tidy(() => {
//         const x1 = input1;
//         const x2 = input2;
//         const y = x1.add(x2);
//         return y;
//     });
// }

// // new 1 dimensional tensors/arrays
// const data1 = tf.tensor1d([4, 6, 5, 9]);
// const data2 = tf.tensor1d([5, 4, 34, 21]);

// // using the model to do input to output
// const result = simpleAdd(data1,data2);
// //printing result
// result.print();



//  sequential model
const model = tf.sequential();

model.add(
    tf.layers.simpleRNN({
        // only needed first layer
        inputShape: [20, 4],
        // the number of units or neurons
        units: 20,
        // weight
        recurrentInitializer: 'GlorotNormal',
    })
);