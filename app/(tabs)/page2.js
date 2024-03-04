import { View, Text, ScrollView } from "react-native";
import { globalStyles } from "../../styles/global";
import { books } from "../../data/books";

export default function Page2() {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text style={globalStyles.heading}>List of books</Text>
        <View>
          {books.map((item) => {
            return (
              <View style={globalStyles.bookbox}>
                <View style={globalStyles.bookboxLeft}>
                  <Text style={globalStyles.text}>{item.title}</Text>
                  <Text style={globalStyles.smalltext}>{item.author}</Text>
                  <Text style={globalStyles.smalltext}>
                    {item.publishingYear}
                  </Text>
                </View>

                <View style={globalStyles.bookboxRight}>
                  <Text style={{ fontSize: 30 }}>{item.numberOfCopies}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
