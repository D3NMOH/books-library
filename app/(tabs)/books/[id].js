import { View, Text } from "react-native";
import { globalStyles } from "../../../styles/global";
import { books } from "../../../data/books";
import { useNavigation, useLocalSearchParams } from "expo-router";

export default function BookDetails() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const book = books.find((book) => book.id === Number(id));
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>{book.title}</Text>

      <View>
        <Text style={globalStyles.title}>{book.author}</Text>
        <Text style={globalStyles.title}>{book.publishingYear}</Text>
      </View>
    </View>
  );
}
