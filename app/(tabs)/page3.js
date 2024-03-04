import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { books } from "../../data/books";

export default function Page3() {
  return (
    <View>
      <Text style={globalStyles.heading}>Lorem ispum</Text>

      <View>
        <Text style={globalStyles.text}>{books[0].title}</Text>
      </View>
    </View>
  );
}
