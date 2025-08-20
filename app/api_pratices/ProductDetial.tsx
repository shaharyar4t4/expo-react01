import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductDetial = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const limit = 10;

  // Fetch Products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();
      setProducts(data.products);
      setTotal(data.total);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  const totalPages = Math.ceil(total / limit);
  const currentPage = skip / limit + 1;

  return (
    <SafeAreaView style={styles.container}>

      {/* Pagination Controls */}
      <View style={styles.pagination}>
        <TouchableOpacity onPress={() => setSkip(skip - limit)} disabled={skip === 0}>
          <Text style={{ color: skip === 0 ? "gray" : "black" }}>Previous</Text>
        </TouchableOpacity>

        <Text style={styles.pageText}>
          Page {currentPage} of {totalPages}
        </Text>
        <TouchableOpacity
          onPress={() => setSkip(skip + limit)}
          disabled={skip + limit >= total}>
          <Text style={{ color: skip + limit >= total ? "gray" : "black" }}>Next</Text>
          </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              {/* Image */}
              <Image source={{ uri: item.thumbnail }} style={styles.image} />

              {/* Content */}
              <View style={styles.details}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <Text numberOfLines={3} style={styles.description}>
                  {item.description}
                </Text>
              </View>
            </View>
          )}
        />
      )}


    </SafeAreaView>
  );
};

export default ProductDetial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  card: {
    flexDirection: "column",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    fontSize: 14,
    color: "green",
  },
  description: {
    fontSize: 12,
    color: "#555",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 10,
  },
  pageText: {
    fontSize: 16,
    fontWeight: "500",
  },

});
