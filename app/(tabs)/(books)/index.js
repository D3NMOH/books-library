// Books.js
import React, { useContext } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { globalStyles } from "../../../styles/global";
import { books } from "../../../data/books";
import { Link } from "expo-router";
import { UserContext } from "../../../context/UserProvider";

export default function Books() {
  const { name, setName, logged, setLogged } = useContext(UserContext);

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text style={globalStyles.heading}>The Book List</Text>

        <View>
          {books.map((item) => {
            return (
              <Link
                key={item.id}
                href={`(books)/${item.id}`}
                asChild
                style={globalStyles.bookbox}
              >
                <Pressable style={globalStyles.bookboxLeft}>
                  {/* <Image
                    source={item.thumbnail}
                    style={[
                      globalStyles.thumbnail,
                      { width: 100, height: 100, alignSelf: "flex-start" },
                    ]}
                    contentFit="contain"
                  /> */}
                  <Text style={globalStyles.text}>{item.title}</Text>
                  <Text style={globalStyles.smalltext}>{item.author}</Text>
                  <Text style={globalStyles.smalltext}>
                    {item.publishingYear}
                  </Text>
                  <View style={globalStyles.bookboxRight}>
                    <Text style={globalStyles.numCopies}>
                      {item.numberOfCopies}
                    </Text>
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
