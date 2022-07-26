const makeUser = function() {
    const arr = [];
    return {
        jump: function() {
            arr.push("jumping");
            return this;
        },
          speak: function() {
            arr.push("speaking");
            return this;
        },
          run: function() {
            arr.push("running");
            return this;
        },
          swim: function() {
            arr.push("swimming");
            return this;
        },
          sleep: function() {
            arr.push("sleeping");
            return this;
        },
          exec: function() {
            if (arr.length == 0) {
                arr.push("")
                console.log(arr.join(''));
            }
            console.log(arr.join(', '));
        } 
    }
}

const user = makeUser()
user.sleep().swim().speak().jump().swim().sleep().run().run().exec()