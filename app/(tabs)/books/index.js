import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { globalStyles } from "../../../styles/global";
import { books } from "../../../data/books";
import { Link } from "expo-router";
import { useState } from "react";

export default function Login() {
  // Set a state variable for each input
  const [name, setName] = useState("");
  const [logged, setLogged] = useState(0);

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text style={globalStyles.heading}>List of books</Text>
        <View>
          {books.map((item) => {
            return (
              <Link
                key={item.id}
                href={`books/${item.id}`}
                asChild
                style={globalStyles.bookbox}
              >
                <Pressable style={globalStyles.bookboxLeft}>
                  <Image
                    source={item.thumbnail}
                    style={{ width: 120 }}
                    contentFit="contain"
                  />
                  <Text style={globalStyles.text}>{item.title}</Text>
                  <Text style={globalStyles.smalltext}>{item.author}</Text>
                  <Text style={globalStyles.smalltext}>
                    {item.publishingYear}
                  </Text>
                  <View style={globalStyles.bookboxRight}>
                    <Text style={{ fontSize: 30 }}>{item.numberOfCopies}</Text>
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
