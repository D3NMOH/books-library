// Books.js
import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { globalStyles } from "../../../styles/global";
import { books } from "../../../data/books";
import { Link } from "expo-router";
import { UserContext } from "../../../context/UserProvider";
import axios from "axios";

export default function Books() {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    async function handleLoadData() {
      try {
        const response = await axios.get(
          `https://mini-project-library.onrender.com/books`
        );
        setBookList(response.data.data);
      } catch (error) {
        console.log(error);
        alert("Something went wrong! Please try again.");
      }
    }
    handleLoadData();
  }, []);
  const { name, setName, logged, setLogged } = useContext(UserContext);

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View>
          {bookList.map((item) => {
            return (
              <Link
                key={item._id}
                href={logged === true ? `(books)/${item._id}` : "/Login"}
                asChild
                style={globalStyles.bookbox}
              >
                <Pressable>
                  <View style={[globalStyles.itemContainer]}>
                    <View style={globalStyles.thumbSmallContainer}>
                      <Image
                        source={item.thumbnail}
                        style={[globalStyles.thumbSmall]}
                        contentFit="contain"
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={globalStyles.text}>{item.title}</Text>
                      <Text style={globalStyles.smalltext}>{item.author}</Text>
                      <Text style={globalStyles.smalltext}>
                        {item.publishingYear}
                      </Text>
                    </View>
                    <View style={globalStyles.bookboxRight}>
                      <Text style={globalStyles.numCopies}>
                        {item.availableCopies}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              </Link>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
