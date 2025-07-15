export async function getTransaction(id: string) {
   console.log(`${process.env.NEXT_PUBLIC_SITE_URL}/api/transactions/${id}`);
   try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/transactions/${id}`);
      if (!response.ok) throw new Error("Failed to fetch transaction");
      return await response.json();
   } catch (error) {
      console.error("Error fetching transaction:", error);
      return null;
   }
}
