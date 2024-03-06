import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { Image } from "expo-image";
import { globalStyles } from "../../../styles/global";
import { books } from "../../../data/books";
import { useNavigation, useLocalSearchParams } from "expo-router";
import axios from "axios";

export default function BookDetails({ route }) {
  const { id } = useLocalSearchParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `https://mini-project-library.onrender.com/books/${id}`
        );
        const bookData = response.data;
        setBook(bookData);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.log(error);
          alert("Something went wrong! Please try again.");
        }
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!book) {
    return (
      <View style={globalStyles.container}>
        <Text>No data found.</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>{book.title}</Text>

      <View>
        <Image source={book.thumbnail} style={globalStyles.thumbnail} />
        <Text style={globalStyles.author}>Author: {book.author}</Text>
        <Text style={globalStyles.year}>
          Year of publishing: {book.publishYear}
        </Text>
        <Text style={globalStyles.rentDuration}>
          You can rent the book for {book.rentDuration} days
        </Text>
        <View style={[globalStyles.booksLeft]}>
          <Text style={globalStyles.booksLeftText}>
            There are still {book.availableCopies} books left
          </Text>
        </View>
      </View>
    </View>
  );
}
