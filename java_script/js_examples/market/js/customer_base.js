let customer_base = {
    1: {
        customer_id: 1,
        customer_name: "Jane",
        customer_surname: "Olson",
        customer_male: "female",
        customer_phone: "+79319119457"
    },
    2: {
        customer_id: 2,
        customer_name: "Jan",
        customer_surname: "Karlosn",
        customer_male: "male",
        customer_phone: "+79219119347"
    },
    3: {
        customer_id: 3,
        customer_name: "Pavel",
        customer_surname: "Ivanov",
        customer_male: "male",
        customer_phone: "+79817525750"
    },
    4: {
        customer_id: 4,
        customer_name: "Petre",
        customer_surname: "Farugi",
        customer_male: "female",
        customer_phone: "+79459496457"
    },
    5: {
        customer_id: 5,
        customer_name: "Armin",
        customer_surname: "Buren",
        customer_male: "male",
        customer_phone: "+79463719457"
    },
    6: {
        customer_id: 6,
        customer_name: "Tilda",
        customer_surname: "Parton",
        customer_male: "female",
        customer_phone: "+74958719457"
    },
    check_customer_by_id: function (customer_id) {
        let a = false;
        for (const key in customer_base) {
            if (customer_base[key].customer_id == customer_id) {
                a = true;
            }
        }
        return a;
    },
    return_name_by_id: function (customer_id) {
        return customer_base[customer_id].customer_name;
    },
    return_surname_by_id: function (customer_id) {
        return customer_base[customer_id].customer_surname;
    },
    return_male_by_id: function (customer_id) {
        return customer_base[customer_id].customer_male;
    },
    return_phone_by_id: function (customer_id) {
        return customer_base[customer_id].customer_phone;
    },
};